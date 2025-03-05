import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1738395521589 implements MigrationInterface {
    name = 'Migrations1738395521589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pirty\` CHANGE \`location\` \`placeId\` varchar(255) NULL`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime NULL ON UPDATE CURRENT_TIMESTAMP, \`id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pirty\` DROP COLUMN \`placeId\``);
        await queryRunner.query(`ALTER TABLE \`pirty\` ADD \`placeId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`pirty\` ADD CONSTRAINT \`FK_22351d853e2adf1de2d7eed384f\` FOREIGN KEY (\`placeId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pirty\` DROP FOREIGN KEY \`FK_22351d853e2adf1de2d7eed384f\``);
        await queryRunner.query(`ALTER TABLE \`pirty\` DROP COLUMN \`placeId\``);
        await queryRunner.query(`ALTER TABLE \`pirty\` ADD \`placeId\` varchar(255) NULL`);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`ALTER TABLE \`pirty\` CHANGE \`placeId\` \`location\` varchar(255) NULL`);
    }

}
