// lib/projectGraph.ts
export type GraphNode = {
    id: string;
    type: "repo" | "tech";
    label?: string;
    color?: string;
    val?: number; // node size
};

export type GraphLink = {
    source: string; // node id
    target: string; // node id
    strength?: number;
    color?: string;
};

export type GraphData = { nodes: GraphNode[]; links: GraphLink[] };

export function buildGraphFromProjects(projects: {
    title: string;
    tech: string[];
}[]): GraphData {
    const nodesMap = new Map<string, GraphNode>();
    const links: GraphLink[] = [];

    const techColor = "#7dd3fc";
    const repoColor = "#e2eeff";

    for (const p of projects) {
        const repoId = `repo:${p.title}`;
        if (!nodesMap.has(repoId)) {
            nodesMap.set(repoId, { id: repoId, type: "repo", label: p.title, color: repoColor, val: 6 });
        }
        for (const t of p.tech) {
            const techId = `tech:${t}`;
            if (!nodesMap.has(techId)) {
                nodesMap.set(techId, { id: techId, type: "tech", label: t, color: techColor, val: 4 });
            }
            links.push({
                source: repoId,
                target: techId,
                strength: 0.9,
                color: "rgba(125,211,252,0.35)",
            });
        }
    }

    return { nodes: [...nodesMap.values()], links };
}
