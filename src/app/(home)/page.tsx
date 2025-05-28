import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Header } from '@/app/components/Header/Header';
import styles from './page.module.scss';
import { Player } from '@/app/components/Player/Player';
import { sessionStore } from '@/app/stores/sessionStore/sessionStore';
import {userStore} from "@/app/stores/userStore/userStore";

const Home = async () => {
  return <div>asds</div>;
};

export default Home;
