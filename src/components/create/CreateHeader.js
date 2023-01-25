import Link from 'next/link';
import React, { useState } from 'react';

import SignInButton from '../signinbutton/SignInButton';
import { useLensUserContext } from '../../context/LensUserContext';
import SettingsSidebar from './SettingsSidebar';
import Image from 'next/image';

export default function CreateHeader(props) {
  const { isSignedIn, data: lensProfile } = useLensUserContext();
  const [openSettingsSidebar, setOpenSettingsSidebar] = useState(false);

  return (
    <>
      <div>{!isSignedIn || !lensProfile ? <SignInButton /> : <></>}</div>

      <SettingsSidebar
        postMetadata={props.postMetadata}
        setPostMetadata={props.setPostMetadata}
        open={openSettingsSidebar}
        setOpen={setOpenSettingsSidebar}
      />
    </>
  );
}
