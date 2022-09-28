import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { showNotification, updateNotification } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons';
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    showNotification({
      id: 'send-notification',
      loading: true,
      title: 'Sending',
      message: 'Your message is being sent',
      autoClose: false,
      disallowClose: true,
    });

    emailjs
      .sendForm(
        "service_ktie318",
        "template_mx6uhax",
        form.current,
        "73p2o5ZS99G94ZUpN"
      )
      .then(
        () => {
          updateNotification({
            id: 'send-notification',
            title: 'Success',
            message: 'Your message has been sent to Long Demon successfully',
            icon: <IconCheck size={16} />,
              autoClose: 2000,
          })
          e.target.reset();
        },
        (error) => {
          updateNotification({
            id: 'send-notification',
            color: 'red',
            title: 'Error while send message',
            message: error.text ?? 'Failed to send message',
            autoClose: 3000,
          })
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h5>Get In Touch</h5>
      <h5 className="text-japanese">連絡する</h5>
      <h2>
        <p>Contact Me</p>
        <p className="text-japanese">私に連絡して</p>
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>
              <p>Email</p>
              {/* <p className="text-japanese text-light">メール</p> */}
            </h4>
            <h5>longnv031120@gmail.com</h5>
            <a href="mailto:longnv031120@gmail.com">
              Send a message
              {/* <p>メッセージを送る</p> */}
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>
              <p>Messenger</p>
              {/* <p className="text-japanese text-light">メッセンジャー</p> */}
            </h4>
            <h5>Long Demon</h5>
            <a
              href="https://m.me/long.demon.0311"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
              {/* <p>メッセージを送る</p> */}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
