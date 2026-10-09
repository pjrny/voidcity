CREATE TABLE worlds (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE buildings (
  id TEXT PRIMARY KEY,
  world_id TEXT NOT NULL,
  type TEXT NOT NULL,
  x REAL NOT NULL,
  y REAL NOT NULL,
  z REAL NOT NULL,
  size_x REAL NOT NULL,
  size_y REAL NOT NULL,
  size_z REAL NOT NULL
);

CREATE TABLE citizen_records (
  id TEXT PRIMARY KEY,
  world_id TEXT NOT NULL,
  home_id TEXT,
  age INTEGER
);

CREATE TABLE flows (
  id TEXT PRIMARY KEY,
  world_id TEXT NOT NULL,
  flow_type TEXT NOT NULL,
  quantity REAL NOT NULL,
  source_id TEXT,
  target_id TEXT
);
