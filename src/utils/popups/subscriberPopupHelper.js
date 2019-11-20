// SET FORM VALUE IN LOCAL STORAGE
const subscriberPopupHelper = setShowForm => {
  // get the current new time
  const currentTime = new Date().getTime();

  // get item form local storage and parse string
  const result = JSON.parse(localStorage.getItem('myPopUpData'));

  // check local storage to see if user has seen popup recently
  if (!result) {
    // show user the pop up
    setShowForm(true);

    // define popup data as object
    const mailChimpData = {
      seen: true,
      popUpTime: new Date().getTime(),
    };

    // store data to local storage as string
    localStorage.setItem('myPopUpData', JSON.stringify(mailChimpData));
  }

  // clear the local storage after 1 hour
  if (result && currentTime > result.popUpTime + 60 * 60 * 1000) {
    localStorage.removeItem('myPopUpData');
  }
};

export default subscriberPopupHelper;
