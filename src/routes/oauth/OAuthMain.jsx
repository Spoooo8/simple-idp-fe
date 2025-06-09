import ParentMain from '../../components/ParentMain';

const OAuthMain = () => {


  const menuItems = [
    { name: 'Dashboard', path: 'form' },
    { name: 'Learn', path: 'learn' },
  ];

 

  return (
   <ParentMain menuItems={menuItems}/>
  );
};

export default OAuthMain;