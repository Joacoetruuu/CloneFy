import React from 'react'

import {
    Skeleton,
    Stack,
    SkeletonCircle,
    SkeletonText,
  } from "@chakra-ui/react";

function SkeletonsPlaylistNav() {
  return (
    <>
    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>

    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>

    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>

    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>

    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>

    <Stack marginTop={"20px"}>
      <Skeleton height="10px" />
      <Skeleton height="10px" />
      <Skeleton height="10px" />
    </Stack>
  </>
  )
}

export default SkeletonsPlaylistNav