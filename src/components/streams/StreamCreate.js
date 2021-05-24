import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StreamCreate = ({ handleSubmit }) => {

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    const renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className} >
                <label>{label}    </label>
                <input type="text" {...input} autoComplete="off" />
                {renderError(meta)}
            </div>
        )
    }
    const onSubmit = formValues => {

    }



    return (
        <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
            <Field label="Enter Title" name="title" component={renderInput} />
            <Field label="Enter Description" name="description" component={renderInput} />
            <button className="ui button primary" >Submit</button>
        </form>
    )
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) errors.title = 'You must enter a title'
    if (!formValues.description) errors.description = 'You must enter a description'

    return errors
}

export default reduxForm({
    form: 'createStream',
    validate
})(StreamCreate)
