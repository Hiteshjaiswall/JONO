import { Box } from '@mui/material';
import React from 'react';

export type AVATARPROPS = {
  src: string;
  alt: string;
  height: number;
  width: number;
};

const ProfileAvatar : React.FC<AVATARPROPS> = ({
    src,
    alt,
    height,
    width
}) => {
  return <Box></Box>;
};

export default ProfileAvatar;
