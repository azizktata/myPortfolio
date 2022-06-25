import React, { useEffect } from 'react';
import "./Project.css";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiFillCaretDown } from "react-icons/ai";
import shop from '../../images/shop.jpg'
import amazon from '../../images/amazon.png'
import product from '../../images/product.png'
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import { DiReact, DiHtml5, DiCss3, DiPython } from "react-icons/di";


function Project() {
    const [open, setOpen] = React.useState(true);
    const projects = [
      {id:1, name:"e-commerce", framework:["REACT","PYTHON","HTML","CSS"], url:'https://github.com/azizktata/myShop', site:"https://62b7008aaf135b70327f524a--fanciful-paprenjak-424a4e.netlify.app/", description:"", photo:shop},
      {id:2, name:"product-promote", framework:["REACT","HTML","CSS"], url:'https://github.com/azizktata/product-promote', site:"https://productio7.netlify.app/", description:"", photo:product},
      {id:3, name:"amazon-clone", framework:["REACT","HTML","CSS"], url:'https://github.com/azizktata/amazon-clone',site:"https://62b6f91bca488e6d69b2968f--amazon-clone-7.netlify.app/", description:"", photo:amazon}
    ]
    useEffect(()=>{
      // document.getElementById('HTML').setAttribute('checked', 'checked');
    },[])
    
      const filters = [
        { icon: <DiReact />, label: 'REACT' },
        { icon: <DiHtml5/>, label: 'HTML' },
        { icon: <DiCss3 />, label: 'CSS' },
        { icon: <DiPython />, label: 'PYTHON' },
     ];
     const handleToggle = (value) => () => {
        setFilter(value)
        
        // setChecked(true)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);

        console.log(checked)
      
      };
      const [checked, setChecked] = React.useState([]);
      const [setFilter] = React.useState("");
      
  return (
    <div className='mainPJ'>
        <div className='projects'>
            <div className='pj'>
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
                  primary="Projects"
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
                filters.map((value) => {
                    const labelId = `filter ${value}`;
            
                    return (
                      <ListItem
                        key={value}
                        disablePadding
                        sx={{ml:3}}
                      >
                        <ListItemButton
                         role={undefined}
                          onClick={handleToggle(value.label)}
                           dense
                           sx={{mr:5}}
                           
                           >
                               
                          
                            <Checkbox
                              edge="start"
                              name={value.label}
                              tabIndex={-1}
                              disableRipple
                              id={value.label}
                              inputProps={{ 'aria-labelledby': labelId }}
                              sx={{color: '#607B96'}}
                            />
                            <ListItemIcon className='icon' sx={{ color: '#607B96', marginLeft:4, marginRight:3,position:"absolute"}}>
                      {value.icon}
                    </ListItemIcon>
                         
                          <ListItemText id={labelId} primary={value.label}  className="filters"/>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </div>
            </div>
            <div className='project-field'>
            <div className='headerr'>
                <div className='cadre'>
                 <p className='tete'>projects </p> 
                 </div>  
            </div>
            <div className='projects-space'>
              {checked.length!==0 ? projects.filter(p => p.framework.includes(checked[checked.length-1])).map(p => 
                <div key={p.id} className='card'>
                    <h3>Project {p.id} <span className='spn'>{'//'} {p.name}</span></h3>
                    <div className='project-card'>
                        <img  src={p.photo} alt='' />
                        <div className='project-details'>
                            <p>{p.description}</p>
                            <div style={{display:"flex", alignItems:"center"}}>
                            <button className='prjt-btn'><a href={p.url} rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-code</a></button>
                            <button className='prjt-btn'><a href={p.site} rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-project</a></button>
                            </div>
                        </div>

                    </div>
                </div>)
                :
                projects.map(p => 
                  <div key={p.id} className='card'>
                      <h3>Project {p.id} <span className='spn'>{'//'} {p.name}</span></h3>
                      <div className='project-card'>
                          <img  src={p.photo} alt='' />
                          <div className='project-details'>
                              <p>{p.description}</p>
                              <div style={{display:"flex", alignItems:"center"}}>
                              <button className='prjt-btn'><a href={p.url} rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-code</a></button>
                              <button className='prjt-btn'><a href={p.site} rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-project</a></button>
                              </div>
                          </div>
  
                      </div>
                  </div>
                )}
                {/* <div className='card'>
                    <h3>Project 2 <span className='spn'>// product-promote</span></h3>
                    <div className='project-card'>
                        <img  src={product} alt='' />
                        <div className='project-details'>
                            <p>took me 2days
                            </p>
                            <button className='prjt-btn'><a href='https://github.com/azizktata/product-promote' rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-project</a></button>

                        </div>

                    </div>
                </div>

                <div className='card'>
                    <h3>Project 3 <span className='spn'>// amazon-clone</span></h3>
                    <div className='project-card'>
                        <img  src={amazon} alt='' />
                        <div className='project-details'>
                            <p>took me 2days
                            </p>
                            <button className='prjt-btn'><a href='https://github.com/azizktata/amazon-clone' rel='noreferrer' target="_blank" style={{textDecoration:"none", color:"white"}}>view-project</a></button>

                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}


export default Project