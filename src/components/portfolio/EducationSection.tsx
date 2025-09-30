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
    { code: "COP 4600", title: "Operating Systems" },
    { code: "CEN 4020", title: "Software Engineering" },
    { code: "COT 4210", title: "Discrete Structures & Algorithms" },
    { code: "MAD 4504", title: "Theory of Computation" },
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
                        color: "rgba(60, 50, 66, 0.35)",
                    }}
                    styles={{
                        header: { borderBottom: "1px solid var(--text-subtle)", paddingBottom: "0.75rem" },
                        body: { background: "var(--grad-lavender-drift)" },
                        title: { color: "var(--text-strong)", fontWeight: 600, letterSpacing: "0.04em" },
                        content: {
                            background: "var(--grad-mauve-mist)",
                            border: "1px solid var(--text-subtle)",
                            boxShadow: "0 28px 60px rgba(60, 50, 66, 0.22)",
                        },
                    }}
                >
                    <Stack gap="md">
                        {currentCourses.map((course) => (
                            <Group
                                key={course.code}
                                justify="space-between"
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: 14,
                                    border: "1px solid var(--text-subtle)",
                                    background: "var(--grad-plum-veil)",
                                }}
                            >
                                <Text style={{ color: "var(--text-strong)", fontWeight: 600 }}>{course.code}</Text>
                                <Text style={{ color: "var(--text)", fontSize: "0.95rem" }}>{course.title}</Text>
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
                                            boxShadow: "0 12px 28px rgba(60, 50, 66, 0.12)",
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
                                        border: '1px solid rgba(60, 50, 66, 0.2)',
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
