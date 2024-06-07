import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add description"),
  });

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

const postRef = collection(db, "posts");

const onCreatePost = async (data) => {
    await addDoc(postRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid
    });
    navigate("/")
}

return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="Title..." {...register("title")} type="text" />
        {errors.title && <p className="error-message">{errors.title.message}</p>}
        <textarea placeholder="Description" {...register("description")}></textarea>
        {errors.description && <p className="error-message">{errors.description.message}</p>}
        <input type="submit" value="Create Post" />
      </form>
    </div>
  );
};
