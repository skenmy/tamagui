ALTER TABLE studio_themes DROP COLUMN uid;
ALTER TABLE studio_themes ADD COLUMN uid UUID DEFAULT (uuid_generate_v4());
