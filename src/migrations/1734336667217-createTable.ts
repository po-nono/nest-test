import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTable1734336667217 implements MigrationInterface {
  name = 'CreateTable1734336667217'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`depertment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`pirty\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slackId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `CREATE TABLE \`user_pirtys_pirty\` (\`userId\` int NOT NULL, \`pirtyId\` int NOT NULL, INDEX \`IDX_9d3a2dcf3e5e85eec0707f5da9\` (\`userId\`), INDEX \`IDX_70ff91accfaba5813077f959e7\` (\`pirtyId\`), PRIMARY KEY (\`userId\`, \`pirtyId\`)) ENGINE=InnoDB`
    )
    await queryRunner.query(
      `ALTER TABLE \`user_pirtys_pirty\` ADD CONSTRAINT \`FK_9d3a2dcf3e5e85eec0707f5da9e\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE \`user_pirtys_pirty\` ADD CONSTRAINT \`FK_70ff91accfaba5813077f959e74\` FOREIGN KEY (\`pirtyId\`) REFERENCES \`pirty\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user_pirtys_pirty\` DROP FOREIGN KEY \`FK_70ff91accfaba5813077f959e74\``)
    await queryRunner.query(`ALTER TABLE \`user_pirtys_pirty\` DROP FOREIGN KEY \`FK_9d3a2dcf3e5e85eec0707f5da9e\``)
    await queryRunner.query(`DROP INDEX \`IDX_70ff91accfaba5813077f959e7\` ON \`user_pirtys_pirty\``)
    await queryRunner.query(`DROP INDEX \`IDX_9d3a2dcf3e5e85eec0707f5da9\` ON \`user_pirtys_pirty\``)
    await queryRunner.query(`DROP TABLE \`user_pirtys_pirty\``)
    await queryRunner.query(`DROP TABLE \`user\``)
    await queryRunner.query(`DROP TABLE \`pirty\``)
    await queryRunner.query(`DROP TABLE \`depertment\``)
  }
}
