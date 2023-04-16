import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/bookimg.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {useEffect, useState} from "react";
import {getList, map} from "../services/stoty";

export const Truyenthuyet = () => {

    const [dsTruyenThuyet, setDsTruyenThuyet] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
                if (mounted) {
                    const ds = items
                        .filter(item => item.theloai === 'TRUYENTHUYET')
                        .map(item => map(item, projImg1));

                    setDsTruyenThuyet(ds);
                }
            })
        return () => mounted = false;
    }, [])

    // const tt1 = [
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg1,
    //         link: "/1"
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg2,
    //         link: "/2"
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg3,
    //         link: "/3"
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg1,
    //         link: "/4"
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg2,
    //         link: "/5"
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg3,
    //         link: "/6"
    //     },
    // ];

    // const tt2 = [
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg1,
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg2,
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg3,
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg1,
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg2,
    //     },
    //     {
    //         title: "Truyện ",
    //         description: "Tên truyện",
    //         imgUrl: projImg3,
    //     },
    // ];

    return (
        <section className="project" id="truyenthuyet">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Truyền thuyết</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        dsTruyenThuyet.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        dsTruyenThuyet.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        dsTruyenThuyet.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
