import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import{ postUserCreate,getUserDetail } from "../../Actions/user";




const initialFValues = {
    id: 0,
    companyName: '',
    email: '',
    mobile: '',
    state:''
,    city: '',
     logo:'',
}

export default function companyForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('comapnyName' in fieldValues)
            temp.comapnyName= fieldValues.comapnyName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
            if ('state' in fieldValues)
            temp.state= fieldValues.state ? "" : "this field is required."
            if ('city' in fieldValues)
            temp.mobile = fieldValues.city ? "" : "this field is required."
        if ('description' in fieldValues)
            temp.description = fieldValues.description.length != 0 ? "" : "This field is required."
            if ('logo' in fieldValues)
            temp.logo = fieldValues.logo ? "  " : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

 
    const EditUser = () => {
        const [user, setUser] = useState(initialValue);
        const { name, description, email, phone,state,city,logo } = user;
        const { id } = useParams();
        const classes = useStyles();
        let history = useHistory();
    
        useEffect(() => {
            loadUserDetails();
        }, []);
    
        const loadUserDetails = async() => {
            const response = await getUserDetail(id);
            setUser(response.data);
        }
    
        const editUserDetails = async() => {
            const response = await postUserCreate(id, user);
            history.push('/all');
        }
    
      

    return (
        <Form onSubmit={handleSubmit}  encType="multipart/form-data">
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="companyName"
                        label="Company Name"
                        value={values.companyName}
                        onChange={handleInputChange}
                        error={errors.companyName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                     <Controls.TextArea
                        label="TextArea"
                        name="text"
                        value={values.description}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Select
                        label="state"
                        name="state"
                        option={}
                        value={values.state}
                        onChange={handleInputChange}
                    />

                </Grid>
               
                    <Controls.Select
                        name="city"
                        label="city"
                        value={values.cityId}
                        onChange={handleInputChange}
                        options={}
                        error={errors.cityID}
                    />
                     <Controls.Input
                        name="image"
                        label="logo"
                        type="file"
                        value={values.logoId}
                        onChange={handleInputChange}
                        options={}
                        error={errors.logoId}
                    />
                   
                <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" onClick={()=>editUserDetails()}/>
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
