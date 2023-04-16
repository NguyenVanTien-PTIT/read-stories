import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {add} from "../services/stoty";
import {useNavigate} from "react-router";

function AddStory() {
    const navigate = useNavigate();

    const [story, setStory] = useState({
        name: '',
        author: '',
        content: '',
        category: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStory((prevStory) => ({
            ...prevStory,
            [name]: value,
        }));
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setStory((prevStory) => ({
            ...prevStory,
            content: data,
        }));
    }

    const handleSubmit = (e) => {
        console.log(story);
        e.preventDefault();

        add(story).then(() => {
            navigate('/');
        })
    };

    const handleFocus = (event, editor) => {
        editor.ui.view.editable.element.style.height = '500px';
        editor.ui.view.editable.element.style.color = '#000000';
    };

    const handleBlur = (event, editor) => {
        editor.ui.view.editable.element.style.height = '500px';
        editor.ui.view.editable.element.style.color = '#000000';
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Tên truyện</Form.Label>
                <Form.Control type="text" placeholder="Nhập tên truyện" name="name" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicAuthor">
                <Form.Label>Tác giả</Form.Label>
                <Form.Control type="text" placeholder="Nhập tên tác giả" name="author" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicContent">
                <Form.Label>Nội dung</Form.Label>
                <CKEditor
                    editor={ClassicEditor}
                    data={story.content}
                    onChange={handleEditorChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
                <Form.Label>Thể loại</Form.Label>
                <Form.Control
                    as="select"
                    name="category"
                    value={story.category}
                    onChange={handleChange}
                >
                    <option value={''}>Lựa chọn</option>
                    <option value={'TRUYENTHUYET'}>Truyền thuyết</option>
                    <option value={'NGUNGON'}>Truyện ngụ ngôn</option>
                    <option value={'COTICH'}>Truyện cổ tích</option>
                    <option value={'SUTHI'}>Truyện sử thi</option>

                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Thêm
            </Button>
        </Form>
    );
}

export default AddStory;
