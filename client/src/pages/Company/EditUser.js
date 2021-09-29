import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, putUserUpdate } from '../../Actions/user';

const [cname, setCname] = useState("");
const [description, setDescription] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [logo, setLogo] = useState();
const [logoPreview, setLogoPreview] = useState("/Profile.png");


const UpdateProfile = ({ history }) => {
    const dispatch = useDispatch();
    
const updateProfileSubmit = (e) => {
  e.preventDefault();

  const myForm = new FormData();

  myForm.set("name", name);
  myForm.set("email", email);
  myForm.set("avatar", avatar);
  dispatch(updateProfile(myForm));
};

const updateProfileDataChange = (e) => {
  const reader = new FileReader();

  reader.onload = () => {
    if (reader.readyState === 2) {
      setAvatarPreview(reader.result);
      setAvatar(reader.result);
    }
  };

  reader.readAsDataURL(e.target.files[0]);
};

useEffect(() => {
  if (user) {
    setName(user.name);
    setEmail(user.email);
    setAvatarPreview(user.avatar.url);
  }

  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }

  if (isUpdated) {
    alert.success("Profile Updated Successfully");
    dispatch(loadUser());

    history.push("/");

    dispatch({
      type: UPDATE_PROFILE_RESET,
    });
  }
}, [dispatch, error, alert, history, user, isUpdated]);

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl  encType="multipart/form-data" onSubmit={updateProfileSubmit}>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Description' value={username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">State</InputLabel>
                <Select onChange={(e) => onValueChange(e)} name='phone' value={state} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Select onChange={(e) => onValueChange(e)} name='phone' value={state} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Logo</InputLabel>
                <Input accept="image/*" onChange={updateProfileDataChange} name='image' type="file" value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;