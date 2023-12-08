import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/download (1).png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px' justifyContent={'space-between'}>
      <Image src={logo} boxSize='60px' borderRadius={'5px'} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar