import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Main = () => {
    const [user] = useAuthState(auth);  // Renamed to 'user' to avoid shadowing
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        if (!user) return;
        const postsRef = collection(db, "posts");

        const getPosts = async () => {
            const data = await getDocs(postsRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    }, [user]); 

    if (!user) {
        return <div className='sign-in-message'>Sign In to View Posts</div>;
    }

    return (
        <div>
            {postList.map((post) => <Post key={post.id} post={post} />)}
        </div>
    );
};

