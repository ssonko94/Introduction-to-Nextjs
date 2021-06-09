import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The cosure Spot",
    image: "https://unsplash.com/photos/sI7IE_jEUWQ/download?force=true",
    address: "Nabweru 236, kibwa street Kampala",
    description: "This is a place to have fun 😂",
  },
  {
    id: "m2",
    title: "New kabalagala",
    image: "https://unsplash.com/photos/lg1XncqylVk/download?force=true",
    address: "Kabalagala 127, main street Kyadondo",
    description: "feel love like your in paradise",
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
      revalidate: 10
    },
  };
}

export default HomePage;
