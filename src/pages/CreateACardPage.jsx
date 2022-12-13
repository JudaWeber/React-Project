import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import validate from "validation/validation";
import axios from "axios";
import { useSelector } from "react-redux";
import useAutoLogin from "hooks/useAutoLogin";
import cardSchema from "validation/card.validation";

const CreateACardPage = () => {
  const history = useHistory();
  const autoLoginFunction = useAutoLogin();
  const bizUserInfo = useSelector((state) => state.bizUserInfo.bizUserInfo);
  const [businessInput, setBusinessInfo] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
  });
  const [businessInputErrors, setBusinessInfoErrors] = useState({
    title: [],
    subTitle: [],
    description: [],
    address: [],
    phone: [],
    url: [],
  });
  const handleBusinessChange = (ev) => {
    let newBusinessInput = JSON.parse(JSON.stringify(businessInput));
    if (newBusinessInput.hasOwnProperty(ev.target.id)) {
      newBusinessInput[ev.target.id] = ev.target.value;
      setBusinessInfo(newBusinessInput);
    }
  };
  const handleRegisterClick = async () => {
    const { error } = validate(businessInput, cardSchema);
    if (error) {
      let newBusinessInput = {
        title: [],
        subTitle: [],
        description: [],
        address: [],
        phone: [],
        url: [],
      };
      for (let errorItem of error.details) {
        if (errorItem.message.includes("pattern")) {
          console.log(errorItem.message);
          errorItem.message =
            "Please insert a valid image link(the url needs to end with .jpg or .png etc...)";
        }
        newBusinessInput[errorItem.path[0]] = [
          ...newBusinessInput[errorItem.path[0]],
          errorItem.message,
        ];
      }
      setBusinessInfoErrors(newBusinessInput);
      return;
    }
    try {
      let createCardAxios = await axios.post("/cards/", {
        title: businessInput.title,
        subTitle: businessInput.subTitle,
        description: businessInput.description,
        address: businessInput.address,
        phone: businessInput.phone,
        url: businessInput.url,
      });
      if (createCardAxios) {
        console.log(createCardAxios);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <h1 className="container greet mt-5">Create a card</h1>
      <div>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="title" className="form-label my-input">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={businessInput.title}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.title.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"title" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <label htmlFor="subTitle" className="form-label my-input">
              Subtitle
            </label>
            <input
              type="text"
              className="form-control"
              id="subTitle"
              value={businessInput.subTitle}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.subTitle.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"subTitle" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <label htmlFor="description" className="form-label my-input">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={businessInput.description}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.description.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"description" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <label htmlFor="address" className="form-label my-input">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={businessInput.address}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.address.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"address" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label my-input">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={businessInput.phone}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.phone.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"phone" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="mb-3">
            <label htmlFor="url" className="form-label my-input">
              Image url
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              value={businessInput.url}
              onChange={handleBusinessChange}
            />
          </div>
          <ul className="list-group">
            {businessInputErrors.url.map((error, index) => (
              <li
                className="list-group-item list-group-item-danger"
                key={"url" + index}
              >
                {error}
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-evenly">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleRegisterClick}
            >
              Create Card
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateACardPage;
