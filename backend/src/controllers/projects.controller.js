import pool from '../config/db.js'

export async function getProjects(req, res, next) {
  try {
    const result = await pool.query(
      'SELECT id, title, description, image_url, technologies, github_url, live_url, created_at FROM projects ORDER BY created_at DESC'
    )

    const projects = result.rows.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      imageUrl: row.image_url,
      technologies: row.technologies
        ? row.technologies.split(',').map((tech) => tech.trim()).filter(Boolean)
        : [],
      githubUrl: row.github_url,
      liveUrl: row.live_url,
      createdAt: row.created_at,
    }))

    res.json(projects)
  } catch (err) {
    next(err)
  }
}
