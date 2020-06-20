


// const Subscription = () => (
//     <section className="subscription">
//         <div className="columns container">
//             <div className="column is-4">
//                 <h2>Catch up with our latest love stories.</h2>
//             </div>
//             <div className="column is-8">
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit! Sed do euismod tempor incididunt!</p>

//                 <div className="columns">
//                     <div className="column is-8">
//                         <input className="input" type="text" placeholder="Your Email Address"></input>
//                     </div>
//                     <div className="column is-4">
//                         <button className="button">SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// );




import React from 'react';
import './style.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Subscription extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        // console.log({
        //     [`${e.target.name}`]: e.target.value,
        // })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        // console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                // console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                // console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            <section className="subscription">
                <div className="columns container">
                    <div className="column is-4">
                        <h2>Catch up with our latest love stories.</h2>
                    </div>
                    <div className="column is-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit! Sed do euismod tempor incididunt!</p>
                        <form onSubmit={this._handleSubmit}>
                            <div className="columns">
                                    <div className="column is-8 no-right-padding">
                                        <input
                                            type="email"
                                            onChange={this._handleChange}
                                            placeholder="Your Email Address"
                                            name="email"
                                            className="input"
                                        />
                                    </div>
                                    <div className="column is-4">
                                        <input type="submit" className="subscribe-button"/>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}