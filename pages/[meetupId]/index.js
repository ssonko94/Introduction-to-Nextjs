import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailPage() {
  return (
    <MeetupDetail
      image={`https://unsplash.com/photos/sI7IE_jEUWQ/download?force=true`}
      title="The cosure Spot"
      address="Nabweru 236, kibwa street Kampala"
      description="The cosure Spot description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //Fetch data from a server

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://unsplash.com/photos/sI7IE_jEUWQ/download?force=true",
        id: meetupId,
        title: "The cosure Spot",
        address: "Nabweru 236, kibwa street Kampala",
        description: "The cosure Spot description",
      },
    },
  };
}

export default MeetupDetailPage;
