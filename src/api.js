import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos',
    {
      headers: {
        Authorization: 'Client-ID ThnuEd3P2JI3CX4kdZ1KuC07jZDTnlGLXmJBeH0_8eM'
      },
      params: {
        query: 'cars'
      }
    });
console.log(response);

    return response;
};

export default searchImages;