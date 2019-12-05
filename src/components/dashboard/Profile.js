import React from 'react';
import { Tag } from '../reusableStyles/tags/Tag';
import { H4 } from '../reusableStyles/typography/Typography';

export const Profile = ({ profile }) => {
  return (
    <>
      <H4>Interests</H4>
      {profile.interests &&
        profile.interests.map(interest => <Tag key={interest}>{interest}</Tag>)}
      {profile.interests.length === 0 && 'Not Provided'}
      <H4>Location</H4>
      <div>{profile.location || 'Not Provided'}</div>
      <H4>Phone number</H4>
      <div>{profile.phoneNumber || 'Not Provided'}</div>
      <H4>About</H4>
      <div>{profile.about || 'Not Provided'}</div>
    </>
  );
};
