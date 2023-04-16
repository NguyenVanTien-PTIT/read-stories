import {Link} from 'react-router-dom';
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getOne} from "../../services/stoty";

export const Content = () => {
    const {id} = useParams();


    const [story, setStory] = useState({title: '', description: ''});

    useEffect(() => {
        let mounted = true;
        getOne(id)
            .then(item => {
                if (mounted) {
                    setStory({title: item.tentruyen, description: item.noidung});
                }
            })
        return () => mounted = false;
    }, [])

    console.log(id);

    return (
        <>
            <h1>{story.title}</h1>
            <div dangerouslySetInnerHTML={{__html: story.description}}></div>

            <Link to="/CƯỚP MÁY KÉO CHỈ CỦA NDU KON MĂCH">Trang Following</Link>
        </>
    );
};
