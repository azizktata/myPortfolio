import React from 'react'
import "./Contactus.css";
import { AiFillCaretDown, AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import emailjs from '@emailjs/browser';
import { AiOutlineCheck } from "react-icons/ai";

function Contactus() {
    const contact = [
        { icon: <AiOutlineMail />, label: 'azizktata77@gmail.com' },
        { icon: <AiOutlinePhone/> , label: '+216 53488169' },
        { icon: <AiFillLinkedin/>, label: 'aziz-ktata' },
      ]
      const [openc, setOpenc] = React.useState(true);
      const [success, setSuccess] = React.useState("");

      function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_5scknvo', 'template_7qbwgyb', e.target, '-pZx8noS1Ydw6Z6Tf')
      .then((result) => {
          console.log(result.text);
          if(result.text==='OK'){
            setSuccess("sent")
          }
          
      }, (error) => {
          console.log(error.text);
          setSuccess("error")
      });

      e.target.reset();
      }
  return (
    <div className='mainbtm'>
        <div className='contact-us'>
            <div className='cts'>

            <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpenc(!openc)}
                sx={{
                  px: 3,
                  pt: 2,
                  pb:0,
                  mb:1,
                  
                //   pb: open ? 0 : 2.5,
                  border: "1px solid #0C1F30"
                //   '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="contacts"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '7%',
                    color:"white",
                    fontFamily: 'Fira Code',
                    width:"100%"
                    
                  }}
                  
                  sx={{ my: 0,  }}
                />
                <AiFillCaretDown
                className='arrow'
                  style={{
                    transform: openc ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    color: 'white'
                  }}
                />
              </ListItemButton>
              {openc &&
                contact.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#607B96' }}
                  >
                    <ListItemIcon style={{ color: 'inherit',position:"absolute" }}  >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                    className='itemtext'
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' ,pl:4, fontFamily: 'Fira Code'}}
                    />
                  </ListItemButton>
                ))}
                </div>
            </div>

        <div className='contact-field'>
            <div className='headerr'>
                <div className='cadre'>
                 <p className='tete'>contacts </p> 
                 </div>  
            </div>
            <div className='contacts'>
                    <form onSubmit={sendEmail}>
                        <div className='form-box'>
                        <div className='input-box'>
                        <span>_name:</span> 
                        <input type="text" id="name" name="name"  required="required"/>
                        </div>
                        <div className='input-box'>
                        <span htmlFor='email'>_email:</span>
                        <input type="email" id="email" name="email"  required/>
                        </div>
                        <div className='input-box'>
                        <span className='txtarea' >_message:</span>
                        <textarea type="text" id="msg" name="message" required/>
                        </div>
                        </div>
                        <div className='lower'>
                        <button type='submit' className='submit-btn'>submit-message</button>
                        <div className={`msg${success}`}> <AiOutlineCheck/> </div></div>
                    </form>
            </div>
        </div>
        <div className='code-snips'>

        </div>
    </div>
  )
}

export default Contactus