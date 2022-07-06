import React from 'react'
import "./Aboutme.css"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiFillCaretDown, AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";

import { GoFileDirectory } from "react-icons/go";

function Aboutme() {

    const [open, setOpen] = React.useState(true);
    const [openc, setOpenc] = React.useState(true);

    const data = [
        { icon: <GoFileDirectory />, label: 'bio' },
        { icon: <GoFileDirectory /> , label: 'education' },
        { icon: <GoFileDirectory />, label: 'CV' },
      ];
      const contact = [
        { icon: <AiOutlineMail />, label: 'azizktata77@gmail.com' },
        { icon: <AiOutlinePhone/> , label: '+216 53488169' },
        { icon: <AiFillLinkedin/>, label: 'aziz-ktata' },
      ]

      const numbers = [
        1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14
      ]
  return (
    <div className='mainbtm'>
        <div className='personalinfo'>
            <div className='bio'>
            <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
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
                  primary="Personal-info"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '7%',
                    color:"white",
                    fontFamily: 'Fira Code',
                    
                  }}
                  
                  sx={{ my: 0 }}
                />
                <AiFillCaretDown
                className='arrow'
                  style={{
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                    color: 'white'
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#607B96' }}
                  >
                    <ListItemIcon id={item.label} style={{ position:"absolute",marginRight:3 }}  >
                      {item.icon}
                    </ListItemIcon>
                    
                    <ListItemText
                    className='itemtext'
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' ,pl:1, fontFamily: 'Fira Code', marginLeft:"10%"}}
                    />
                  </ListItemButton>
                ))}



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
        <div className='data-field'>
            <div className='headerr'>
                <div className='cadre'>
                 <p className='tete'>personal-info </p> 
                 </div>  
            </div>
            <div className='data'>
                    <div className='numbers'>
                        {numbers.map( (numb) =>  
                            <p className='num'> {numb} </p>
                        )}
                    </div>
                    <div className='textfield'>
                            <p>{'/**'}</p>
                            <p>* I'am junior software developer</p>
                            <p>* expected to be graduated in 2024</p>
                            <p>* i see myself as a person who has a potential</p>
                            <p>* to succesed and step out in whatever area</p>
                            <p>* im gonna dive in.</p>
                            
                            <p>* I'm extremly motivated to develop new skills</p>
                            
                            <p>* and grow professionally, always seeking discomfort</p>
                            <p>* and ready for new challenge.</p>
                            <p>*/</p>
                    </div>
            </div>
            
        </div>
        <div className='code-snippets'>

        </div>
    </div>
  )
}

export default Aboutme