export async function getMyEstate(){
  
  const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/estate`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    if(data?.length > 0){      
      return data;
    } else {
      return 'no address in location ';
    }
  });

  return result;
}



