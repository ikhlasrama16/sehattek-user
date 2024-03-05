import { Fragment } from "react";
import Navbar from "../components/Layouts/navbar";
import Footer from "../components/Layouts/footer";
import InputForm from "../components/Elements/Input/Index";
import Card from "../components/Fragments/Card";

const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-white-300 h-screen">
        <Navbar/>
        <button className="fixed top-10 right-10 px-4 py-2 bg-violet-500 text-white rounded-md font-bold">
          Login
        </button>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-large text-bold w-3/5 mb-4">
            <InputForm className="px-4 py-2" />
          </div>
          <dir className="grid grid-cols-3 gap-4">
          <Card>
            <Card.Header alt="image" />
            <Card.Body title="Chat dengan Dokter"></Card.Body>
          </Card>
          <Card>
            <Card.Header alt="image" />
            <Card.Body title="Chat dengan Psikolog"></Card.Body>
          </Card>
          <Card>
            <Card.Header alt="image" />
            <Card.Body title="Home Care"></Card.Body>
          </Card>
          </dir>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
