import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
  
const Searchbar = () => {
  
  const [myOptions, setMyOptions] = useState([])
  
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
  
    fetch('https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res)
      for (var i = 0; i < res.length; i++) {
        myOptions.push(res[i].title.rendered)
      }
      setMyOptions(myOptions)
    })
  }
  
  return (

    <div className='pb-5'>

      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}
  
export default Searchbar;