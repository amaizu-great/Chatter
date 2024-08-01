

interface UserDetails {
    image?: any;
    // Add other user properties if needed
  }
  
  export const fetchUserDetails = async (email:any): Promise<UserDetails | null> => {
    
    try {
      const response = await fetch('/api/db/getUserDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const user: UserDetails = await response.json();
      return user;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };
  