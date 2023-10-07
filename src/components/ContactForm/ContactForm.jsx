// import { Formik, Field, Form } from 'formik'
export const ContactForm = ({ addListContacts }) => {
  return (
    <form
      onSubmit={(e, actions) => {
        addListContacts(e);
        // actions.resetForm();
      }}
    >
      <div>
        <label>Name</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Number</label>
        <input type="tel" name="number" required />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

// export const ContactForm = ({ elemForm ,handlerChange}) => {
//   return (
//     <form onSubmit={elemForm}>
//       <div>
//         <label >Name</label>
//         <input
//         type="text"
//         name="name"
//         onChange={handlerChange}
//          required />
//       </div>
//       <div>
//         <label >Number</label>
//         <input
//          type="tel"
//           name="number"
//           onChange={handlerChange}
//            required />
//       </div>

//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
