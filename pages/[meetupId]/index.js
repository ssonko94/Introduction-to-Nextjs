import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailPage(props) {
  return (
    <>
    <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ssonko:4JmDQ7CyRijJSPC@cluster0.yhjz1.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meeetups");

  const meetups = await meetupCollection
    .find(
      {},
      {
        _id: 1,
      }
    )
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //Fetch data from a server

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://ssonko:4JmDQ7CyRijJSPC@cluster0.yhjz1.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupCollection = db.collection("meeetups");

  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
