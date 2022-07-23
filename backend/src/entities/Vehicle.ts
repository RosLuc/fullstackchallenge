import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("vehicles")
export class Vehicle {
  @PrimaryColumn()
  id: string;

  @Column({ name: "license_plate" })
  licensePlate: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  version: string;

  @Column()
  year: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
