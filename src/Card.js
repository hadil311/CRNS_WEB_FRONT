import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Title from './Title';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontSize: 20,
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
  
  <div>   
    <Title > Dashboard</Title>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem="30px"/>}
        spacing={4}
      >
    
          <Item style={{
        backgroundColor: '#F5F5F5' }}> <CallMissedOutgoingIcon style={{
          color: '#03a9f4' }}  sx={{ fontSize: 50 }} /> <h3 style={{
            color: '#5b7a8e' , fontSize: '21px'}} >Performance par jour </h3> 
            <h3 style={{
            color: '#5b7a8e' , fontSize: '21px'}} >600 </h3></Item >
          
        <Item style={{
        backgroundColor: '#F5F5F5' }} > <PeopleIcon style={{
          color: '#03a9f4'  }} sx={{ fontSize: 50}}   /> <h3
          style={{
            color: '#5b7a8e' , fontSize: '21px'}}>Qualité par jour </h3>
            <h3
          style={{
            color: '#5b7a8e' , fontSize: '21px'}}>10 </h3>  </Item>
        <Item style={{
        backgroundColor: '#F5F5F5' }}><AccessTimeIcon style={{
          color: '#03a9f4' }} sx={{ fontSize: 50 }} /> <h3
          style={{
            color: '#5b7a8e', fontSize: '21px' }}>Qualité par jour </h3>
            <h3
          style={{
            color: '#5b7a8e', fontSize: '21px' }}>30 </h3> </Item>
        <Item style={{
        backgroundColor: '#F5F5F5' }}><AddCircleOutlineIcon style={{
          color: '#03a9f4' }} sx={{ fontSize: 50 }} /><h3
          style={{
            color: '#5b7a8e', fontSize: '21px' }}>Rendement par jour </h3>
            <h3
          style={{
            color: '#5b7a8e', fontSize: '21px' }}>250 </h3> </Item>
      </Stack>
      </div>
  );
}