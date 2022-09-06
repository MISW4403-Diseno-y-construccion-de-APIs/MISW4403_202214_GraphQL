/* eslint-disable prettier/prettier */
import { ExhibitionEntity } from "../exhibition/exhibition.entity";
import { MuseumEntity } from "../museum/museum.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImageEntity } from "../image/image.entity";
import { ArtistEntity } from "../artist/artist.entity";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class ArtworkEntity {

    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Field()
    @Column()
    name: string;
 
    @Field()
    @Column()
    year: number;
 
    @Field()
    @Column()
    description: string;
 
    @Field()
    @Column()
    type: string;
 
    @Field()
    @Column()
    mainImage: string;

    @Field(type => MuseumEntity)
    @ManyToOne(() => MuseumEntity, museum => museum.artworks)
    museum: MuseumEntity;

    @ManyToOne(() => ExhibitionEntity, exhibition => exhibition.artworks)
    exhibition: ExhibitionEntity;

    @OneToMany(() => ImageEntity, image => image.artwork)
    images: ImageEntity[];

    @ManyToOne(() => ArtistEntity, artist => artist.artworks)
    artist: ArtistEntity;
}
