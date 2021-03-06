import { reduxForm } from 'redux-form'

class ContactForm extends React.Component {
    render() {
        const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" {...firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" {...lastName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email" {...email}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'contact',
    fields: ['firstName', 'lastName', 'email']
})(ContactForm);
