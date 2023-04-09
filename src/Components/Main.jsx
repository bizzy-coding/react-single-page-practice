import React from "react"
import account from "../assets/account.svg"
import contact from "../assets/contact.svg"
import delivery from "../assets/delivery.svg"
import lock from "../assets/lock.svg"
import payment from "../assets/payment.svg"
import question from "../assets/question.svg"




export default function Main() {
    return (
        <main>
            <div className="faq-1 faq-wrap">
                <img src={payment} alt="" />
                <h2>Payment</h2>
                <p>Payment methods vary by e-commerce website, but most accept major credit and debit cards such as Visa, Mastercard, American Express, and Discover. Some websites may also accept alternative payment methods like PayPal, Apple Pay, or Google Pay.</p>
            </div>
            <div className="faq-2 faq-wrap">
                <img src={account} alt="" />
                <h2>Account</h2>
                <p>To create an account on an e-commerce website, look for a "sign up" or "create an account" button on the homepage or during the checkout process. You will typically be asked to provide your name, email address, and a password.</p>
            </div>
            <div className="faq-3 faq-wrap">
                <img src={contact} alt="" />
                <h2>Contact</h2>
                <p>You can typically contact customer service by phone, email, or through a contact form on the website. Look for a "contact us" or "customer service" link on the website's homepage or in the footer.</p>
            </div>
            <div className="faq-4 faq-wrap">
                <img src={delivery} alt="" />
                <h2>Delivery</h2>
                <p>Delivery times will vary depending on your location and the shipping method you choose. Most e-commerce websites will provide estimated delivery times during the checkout process or in your order confirmation email.</p>
            </div>
            <div className="faq-5 faq-wrap">
                <img src={lock} alt="" />
                <h2>Security</h2>
                <p>We take the protection of your personal information seriously and use industry-standard security measures, such as encryption and firewalls, to protect your data. We also have a privacy policy that outlines how we collect, use, and store your information, and we never share or sell your data to third parties without your consent.</p>
            </div>
            <div className="faq-6 faq-wrap">
                <img src={question} alt="" />
                <h2>General</h2>
                <p>We offer a money-back guarantee for most of our products. If you're not satisfied with your purchase, please contact our customer service team within the specified timeframe for a full refund or exchange. Please refer to our return policy for more information.</p>
            </div>
        </main>
    )
}

