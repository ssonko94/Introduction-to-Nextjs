import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "The cosure Spot",
//     image: "https://unsplash.com/photos/sI7IE_jEUWQ/download?force=true",
//     address: "Nabweru 236, kibwa street Kampala",
//     description: "This is a place to have fun 😂",
//   },
//   {
//     id: "m2",
//     title: "New kabalagala",
//     image: "https://unsplash.com/photos/lg1XncqylVk/download?force=true",
//     address: "Kabalagala 127, main street Kyadondo",
//     description: "feel love like your in paradise 😍",
//   },
// ];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   //fetch data from an api

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ssonko:4JmDQ7CyRijJSPC@cluster0.yhjz1.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meeetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meeetup => ({
        title: meeetup.title,
        address: meeetup.address,
        image: meeetup.image,
        id: meeetup._id.toString(),
      })),
      revalidate: 10,
    },
  };
}

export default HomePage;
