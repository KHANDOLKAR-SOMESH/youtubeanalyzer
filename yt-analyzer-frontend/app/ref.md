<>
      <Navbar />
      <div
       className="
       
       w-screen
       text-white
       
       
       "
      >
        <h1 style={{ color: "#00aaff", marginBottom: "20px" }}>
          YouTube Video Analyzer
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter YouTube URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              padding: "10px",
              width: "70%",
              border: "1px solid #444",
              borderRadius: "5px",
              backgroundColor: "#222",
              color: "#fff",
            }}
          />
          <button
            onClick={analyzeVideo}
            style={{
              marginLeft: "10px",
              padding: "10px 15px",
              background: "#00aaff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Analyze
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {data && (
          <div
            style={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#1e1e1e",
              textAlign: "left",
            }}
          >
            {/* Cover Thumbnail */}
            <div
              style={{
                backgroundImage: `url(${data.thumbnail})`,
                height: "300px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            />

            <h2 style={{ marginTop: "20px" }}>{data.title}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <p>
                <strong>Duration:</strong> {data.duration} sec
              </p>
              <p>
                <strong>Views:</strong> {data.views}
              </p>
              <p>
                <strong>Likes:</strong> {data.likes}
              </p>
              <p>
                <strong>Dislikes:</strong> {data.dislikes}
              </p>
              <p>
                <strong>Comments:</strong> {data.comments}
              </p>
              <p>
                <strong>Total Playtime:</strong> {data.total_playtime} sec
              </p>
              <p>
                <strong>Subscriber Gain:</strong> {data.subscriber_gain}
              </p>
              <p>
                <strong>SEO Score:</strong> {data.seo_score}%
              </p>
            </div>

            {/* Engagement Chart */}
            <h3 style={{ marginTop: "20px", color: "#00aaff" }}>
              Engagement Metrics
            </h3>
            <BarChart
              width={600}
              height={300}
              data={[
                { name: "Views", value: data.views },
                { name: "Likes", value: data.likes },
                { name: "Dislikes", value: data.dislikes },
                { name: "Comments", value: data.comments },
                { name: "Subscriber Gain", value: data.subscriber_gain || 0 },
              ]}
            >
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00aaff" />
            </BarChart>

            {/* SEO Score Breakdown (Pie Chart) */}
            <h3 style={{ marginTop: "20px", color: "#00aaff" }}>
              SEO Score Breakdown
            </h3>
            <PieChart width={400} height={300}>
              <Pie
                data={[
                  { name: "Title Optimization", value: 30 },
                  { name: "Description Optimization", value: 40 },
                  { name: "Tags Optimization", value: 30 },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#00aaff"
              >
                <Cell fill="#00ff99" />
                <Cell fill="#ffcc00" />
                <Cell fill="#ff4444" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            {/* Channel Growth Trend (Line Chart) */}
            <h3 style={{ marginTop: "20px", color: "#00aaff" }}>
              Channel Growth
            </h3>
            <LineChart
              width={600}
              height={300}
              data={[
                { name: "Total Videos", value: data.total_videos || 0 },
                {
                  name: "Total Subscribers",
                  value: data.total_subscribers || 0,
                },
              ]}
            >
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#00aaff" />
            </LineChart>
          </div>
        )}
        </div>
    </>