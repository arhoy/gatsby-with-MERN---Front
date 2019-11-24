import React from 'react';
import { Tag } from '../reusableStyles/tags/Tag';
import { H4 } from '../reusableStyles/typography/Typography';

export const Profile = ({ profile }) => {
  return (
    <>
      <H4>Interests</H4>
      {profile.interests.map(interest => (
        <Tag>{interest}</Tag>
      ))}
      <H4>Location</H4>
      <div>{profile.location}</div>
      <H4>Phone number</H4>
      <div>{profile.phoneNumber}</div>
      <H4>About</H4>
      <div>{profile.about}</div>
    </>
  );
};
