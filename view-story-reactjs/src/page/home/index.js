import { Link } from 'react-router-dom';
import '../../App.css';
import { NavBar } from "../../components/NavBar";
import { Banner } from "../../components/Banner";
import { Theloai } from "../../components/Theloai";
import { Truyenthuyet } from "../../components/Truyenthuyet";
import { Ngungon } from "../../components/Ngungon";
import { Cotich } from "../../components/Cotich";
import { Suthi } from "../../components/Suthi";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Theloai />
      <Truyenthuyet />
      <Ngungon />
      <Cotich />
      <Suthi />
    </>
  );
};


