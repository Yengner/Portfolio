"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Section } from "../utils";
import { softCardStyle } from "./styles";
import USFParticles from "../ParticlesComponent";

const universityInfo = {
    name: "University of South Florida",
    subtitle: "B.C.S. Computer Science · Class of 2026 · GPA 3.6/4.0",
};

// Incase i want to add more columns later
const academicColumns = [
    {
        items: [
            { label: "Focus", value: "Backend • Data/ML • Cloud" },
            { label: "Leadership", value: "SHPE External Director" },
        ],
    },
];

const currentCourses = [
    {
        code: "CDA 4205L",
        title: "Computer Architecture",
        schedule: "9:30am–10:45am MW · CPR 115",
    },
    {
        code: "CDA 4205L",
        title: "Computer Architecture Lab",
        schedule: "11:30am–1:15pm W · ENB 214",
    },
    {
        code: "CIS 4212",
        title: "Privacy-Preserving and Trustworthy Cyber-Infrastructures",
        schedule: "2:00pm–3:15pm MW · EDU 115",
    },
    {
        code: "CIS 4930",
        title: "Deep Reinforcement Learning",
        schedule: "11:00am–1:45pm F · SOC 150",
    },
    {
        code: "COT 4400",
        title: "Analysis Of Algorithms",
        schedule: "8:00am–10:45am F · CIS 1048",
    },
];

export default function EducationPage() {
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);

    return (
        <>
            <Section
                id="education"
                title="Education"
            // description="Interactive front-end developer blending design and code."
            >
                <Modal
                    opened={modalOpened}
                    onClose={closeModal}
                    // lockScroll={false}
                    title="Current coursework"
                    size="xl"
                    centered
                    overlayProps={{
                        blur: 8,
                        opacity: 0.4,
                        color: "rgba(15, 23, 42, 0.4)",
                    }}
                    styles={{
                        header: { borderBottom: "1px solid var(--text-subtle)", paddingBottom: "0.75rem" },
                        body: { background: "var(--grad-lavender-drift)" },
                        title: { color: "var(--text-strong)", fontWeight: 600, letterSpacing: "0.04em" },
                        content: {
                            background: "var(--grad-mauve-mist)",
                            border: "1px solid var(--text-subtle)",
                            boxShadow: "var(--shadow-strong)",
                        },
                    }}
                >
                    <Stack gap="md">
                        {currentCourses.map((course) => (
                            <Group
                                key={`${course.code}-${course.title}`}
                                justify="space-between"
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: 14,
                                    border: "1px solid var(--card-border)",
                                    background: "var(--grad-plum-veil)",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Text style={{ color: "var(--text-strong)", fontWeight: 600 }}>{course.code}</Text>
                                <div style={{ display: "grid", gap: "0.25rem", textAlign: "right" }}>
                                    <Text style={{ color: "var(--text)", fontSize: "0.95rem" }}>{course.title}</Text>
                                    <Text style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                                        {course.schedule}
                                    </Text>
                                </div>
                            </Group>
                        ))}
                    </Stack>
                </Modal>

                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            ...softCardStyle,
                            // background: "transparent",
                            // background: "rgba(186, 186, 186, 0.55)",
                            position: "relative",
                            zIndex: 1,
                            display: "grid",
                            gap: "1.8rem",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0.5rem",
                                minHeight: 200,
                            }}
                        >
                            <USFParticles
                                svg="/words/USF.svg"
                                scale={0.7}
                                width={540}
                                height={200}
                                style={{
                                    pointerEvents: "none",
                                    zIndex: 0,
                                    width: "100%",
                                    maxWidth: 520,
                                }}
                                color="#006747"
                            />
                        </div>

                        <Stack gap="lg">
                            <Stack gap="xs">
                                <Text c="var(--text-strong)" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                                    {universityInfo.name}
                                </Text>
                                <Text c="var(--text)" style={{ letterSpacing: "0.06em", fontSize: "0.85rem" }}>
                                    {universityInfo.subtitle}
                                </Text>
                            </Stack>

                            <div
                                style={{
                                    display: "grid",
                                    gap: "1rem",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                }}
                            >
                                    {academicColumns.map((column) => (
                                        <div
                                            key={column.items[0].label}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.6rem",
                                                background: "var(--grad-mauve-mist)",
                                                border: "1px solid var(--text-subtle)",
                                                boxShadow: "var(--shadow-soft)",
                                                borderRadius: 14,
                                                padding: "1rem 1.1rem",
                                            }}
                                        >
                                        <div style={{ display: "grid", gap: "0.5rem" }}>
                                            {column.items.map((item) => (
                                                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                                                    <Text style={{ color: "var(--text-strong)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                                        {item.label}
                                                    </Text>
                                                    <Text style={{ color: "var(--text)", fontWeight: 600 }}>
                                                        {item.value}
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openModal}
                                variant="filled"
                                color="dark"
                                size="sm"
                                radius="xl"
                                styles={{
                                    root: {
                                        background: 'var(--grad-mauve-accent)',
                                        color: 'var(--foreground)',
                                        border: '1px solid var(--card-border)',
                                    },
                                }}
                                style={{ alignSelf: "flex-start" }}
                            >
                                View current classes
                            </Button>
                        </Stack>
                    </div>
                </div>
            </Section>
        </>
    );
}
