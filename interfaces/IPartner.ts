import { RowDataPacket } from 'mysql2';

export default interface IPartner extends RowDataPacket {
  id: number;
  name: string;
  logo: string;
  link: string;
}