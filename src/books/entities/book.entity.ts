import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author_fullname: string;

  @Column()
  number_of_pages: number;

  @Column()
  current_page: number;

  @Column({
    default: false,
  })
  show_progress_as_percentage: boolean;

  @Column({
    nullable: true,
    default: null,
  })
  reading_started_at: Date | null;

  @Column({
    nullable: true,
    default: null,
  })
  reading_finished_at: Date | null;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  //TODO: Add owner
  //TODO: Add tags
  //TODO: Add shelf
  //TODO: Add computed property for progress
}
