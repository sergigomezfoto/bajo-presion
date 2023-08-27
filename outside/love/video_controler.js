const actions = [
    {
      time: 5,  // aquesta acció es realitzarà quan el vídeo arribi al segon 5
      action: () => {
        console.log("Acció del segon 5 executada!");
        heartConquered(false);
      }
    },
    {
      time: 10,
      action: () => {
        console.log("Acció del segon 10 executada!");
        heartConquered();
      }
    }
  ];