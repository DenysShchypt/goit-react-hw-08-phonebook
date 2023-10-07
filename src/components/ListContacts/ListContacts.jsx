export const ListContacts = ({ nameContact, removeContact }) => {
  return (
    <ul>
      {nameContact.map(contact => (
        
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button type="button"  onClick={()=>removeContact(contact.id)}>
              Delete
            </button>
          </li>
     
      ))}
    </ul>
  );
};
