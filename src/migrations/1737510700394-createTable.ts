import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1737510700394 implements MigrationInterface {
    name = 'CreateTable1737510700394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`depertment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`slackId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirty\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime NULL ON UPDATE CURRENT_TIMESTAMP, \`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`location\` varchar(255) NULL, \`locationUrl\` varchar(255) NULL, \`budget\` int NULL, \`date\` datetime NULL, \`holdingStatus\` varchar(255) NOT NULL DEFAULT 'active', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirty_user\` (\`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime NULL ON UPDATE CURRENT_TIMESTAMP, \`userId\` varchar(255) NOT NULL, \`pirtyId\` int NOT NULL, \`paid\` enum ('notyet', 'paid', 'pending') NOT NULL DEFAULT 'notyet', PRIMARY KEY (\`userId\`, \`pirtyId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_depertment_depertment\` (\`userId\` varchar(36) NOT NULL, \`depertmentId\` int NOT NULL, INDEX \`IDX_ab27bdacf1ebed31b3eb477314\` (\`userId\`), INDEX \`IDX_20efaf46e6d352820bbb20893f\` (\`depertmentId\`), PRIMARY KEY (\`userId\`, \`depertmentId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pirty_owners_user\` (\`pirtyId\` int NOT NULL, \`userId\` varchar(36) NOT NULL, INDEX \`IDX_3c59d9c154b42daf08de2b16e1\` (\`pirtyId\`), INDEX \`IDX_9dec3329c658c54b3ae3ac6656\` (\`userId\`), PRIMARY KEY (\`pirtyId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pirty_user\` ADD CONSTRAINT \`FK_428d6c082e15bf8c0a39f158be7\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pirty_user\` ADD CONSTRAINT \`FK_9886236e29f13b4ce1b75fd0912\` FOREIGN KEY (\`pirtyId\`) REFERENCES \`pirty\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_depertment_depertment\` ADD CONSTRAINT \`FK_ab27bdacf1ebed31b3eb4773143\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_depertment_depertment\` ADD CONSTRAINT \`FK_20efaf46e6d352820bbb20893f5\` FOREIGN KEY (\`depertmentId\`) REFERENCES \`depertment\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pirty_owners_user\` ADD CONSTRAINT \`FK_3c59d9c154b42daf08de2b16e14\` FOREIGN KEY (\`pirtyId\`) REFERENCES \`pirty\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pirty_owners_user\` ADD CONSTRAINT \`FK_9dec3329c658c54b3ae3ac66560\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pirty_owners_user\` DROP FOREIGN KEY \`FK_9dec3329c658c54b3ae3ac66560\``);
        await queryRunner.query(`ALTER TABLE \`pirty_owners_user\` DROP FOREIGN KEY \`FK_3c59d9c154b42daf08de2b16e14\``);
        await queryRunner.query(`ALTER TABLE \`user_depertment_depertment\` DROP FOREIGN KEY \`FK_20efaf46e6d352820bbb20893f5\``);
        await queryRunner.query(`ALTER TABLE \`user_depertment_depertment\` DROP FOREIGN KEY \`FK_ab27bdacf1ebed31b3eb4773143\``);
        await queryRunner.query(`ALTER TABLE \`pirty_user\` DROP FOREIGN KEY \`FK_9886236e29f13b4ce1b75fd0912\``);
        await queryRunner.query(`ALTER TABLE \`pirty_user\` DROP FOREIGN KEY \`FK_428d6c082e15bf8c0a39f158be7\``);
        await queryRunner.query(`DROP INDEX \`IDX_9dec3329c658c54b3ae3ac6656\` ON \`pirty_owners_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_3c59d9c154b42daf08de2b16e1\` ON \`pirty_owners_user\``);
        await queryRunner.query(`DROP TABLE \`pirty_owners_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_20efaf46e6d352820bbb20893f\` ON \`user_depertment_depertment\``);
        await queryRunner.query(`DROP INDEX \`IDX_ab27bdacf1ebed31b3eb477314\` ON \`user_depertment_depertment\``);
        await queryRunner.query(`DROP TABLE \`user_depertment_depertment\``);
        await queryRunner.query(`DROP TABLE \`pirty_user\``);
        await queryRunner.query(`DROP TABLE \`pirty\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`depertment\``);
    }

}
